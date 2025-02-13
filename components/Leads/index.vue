<script setup lang="ts">
import Column from 'primevue/column'
import Divider from 'primevue/divider'
import Menu from 'primevue/menu'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button'
import Badge from 'primevue/badge'

import { leadsData } from '~/utilities/dummy'

import { usePrimeVue } from 'primevue/config'
import { useToast } from 'primevue/usetoast'
import { useLeads } from './leads-setup'

const toast = useToast()
const {
  listCSV,
  visibleCSV,
  isModalImport,
  onToggleModalImport,
  isModalExport,
  onToggleModalExport,
  onChangeVisibleCSV,
} = useLeads()

const $primevue = usePrimeVue()
const fileData = ref([])

const formatSize = (bytes: any) => {
  const k = 1024
  const dm = 3
  const sizes = $primevue.config.locale?.fileSizeTypes || 0
  console.log('sizes', sizes) // eslint-disable-line

  if (bytes === 0) {
    return `0 ${[sizes]}`
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const formattedSize = parseFloat((bytes / k ** i).toFixed(dm))

  return `${formattedSize} ${sizes}`
}

const onTemplatedUpload = (e: any) => {
  console.log('eventt', e.target.value) // eslint-disable-line
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 })
}

const totalSize = ref(0)
const totalSizePercent = ref(0)
const onRemoveTemplatingFile = (file: any, removeFileCallback: any, index: any) => {
  removeFileCallback(index)
  totalSize.value -= parseInt(formatSize(file.size), 10)
  totalSizePercent.value = totalSize.value / 10
}
const onSelectedFiles = (event: any) => {
  fileData.value = event.files
  fileData.value.forEach((file: any) => {
    totalSize.value += parseInt(formatSize(file.size), 10)
  })
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center gap-3 mb-4">
      <div>
        <ElementsInputSelect
          id="allDistributor"
          :placeholder="$t('label.allDistributor')"
          :options="[
            { name: 'A', code: 'a' },
            { name: 'B', code: 'b' },
          ]"
          option-label="name"
          option-value="code"
        />
      </div>
      <div class="flex items-center gap-3">
        <div>
          <ElementsInputText
            id="search"
            :placeholder="$t('text.searchData')"
            container-class="w-[250px]"
            icon-position="left"
          >
            <template #icon> <i class="pi pi-search"></i> </template>
          </ElementsInputText>
        </div>
        <div
          class="relative bg-[#E7F4FE] rounded-xl h-[48px] text-sm px-4 py-3 cursor-pointer"
          @click="onChangeVisibleCSV"
        >
          <div class="flex items-center gap-2">
            <img src="/images/icon-sheets-blue.svg" />
            <p class="font-semibold text-[#1F76B6]">{{ $t('text.csvLeads') }}</p>
            <i class="pi pi-chevron-down" />
          </div>
          <div v-if="visibleCSV" ref="target" class="absolute right-0 top-14 z-10">
            <Menu :model="listCSV" :pt="{ root: { class: 'p-0 rounded-xl' } }">
              <template #item="{ label, props: propsMenu, item }">
                <div @click="item.click">
                  <a
                    v-if="item.icon === 'import'"
                    class="flex gap-4 p-4 text-sm font-medium"
                    v-bind="propsMenu.action"
                    @click="onToggleModalImport"
                  >
                    {{ label }}
                  </a>
                  <Divider class="my-0 mx-4 w-auto" />

                  <a
                    v-if="item.icon === 'export'"
                    class="flex gap-4 p-4 text-sm font-medium"
                    v-bind="propsMenu.action"
                    @click="onToggleModalExport"
                  >
                    {{ label }}
                  </a>
                </div>
              </template>
            </Menu>
          </div>
        </div>
      </div>
    </div>
    <UITable :value="leadsData">
      <template #default>
        <Column field="distributorName" :header="$t('label.distributorName')" style="min-width: 10rem">
          <template #body="slotProps">
            <p class="font-semibold">{{ slotProps.data.distributorName }}</p>
          </template>
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="businessName" :header="$t('label.businessName')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="fullName" :header="$t('label.fullName')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="businessAddress" :header="$t('label.businessAddress')" sortable style="min-width: 8rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="phoneNo" :header="$t('label.noHp')" style="min-width: 10rem" />
        <Column field="averagesBuy" :header="$t('label.averagesBuy')" sortable style="min-width: 10rem">
          <template #sorticon>
            <IconSortable />
          </template>
        </Column>
        <Column field="action" :header="$t('label.action')" style="min-width: 10rem">
          <template #body>
            <ElementsButton
              class="!bg-[#1F76B6] !text-[12px] !rounded-full !h-fit !w-fit py-0 px-5"
              @click="navigateTo('/leads/1')"
            >
              {{ $t('text.detail') }}
            </ElementsButton>
          </template>
        </Column>
      </template>
    </UITable>

    <div class="px-8 -mx-[32px]">
      <UIPagination
        :item-count="5"
        :per-page="5"
        :total-data="6"
        :on-go-to-page="() => {}"
        :on-page-size-change="() => {}"
        :total-page="10"
        :page="1"
      />
    </div>

    <!-- Dialog Import CSV -->
    <UIDialog
      :visible="isModalImport"
      root-class="w-[650px]"
      container-class="p-6"
      @update:visible="onToggleModalImport"
    >
      <template #default="slotProps">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ $t('text.importDataLeads') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>
          <div class="grid grid-cols-2 content-center gap-3 mt-4">
            <div class="rounded-xl border border-dashed !border-color-[#1F76B6] px-6 text-center py-3">
              <FileUpload
                name="demo[]"
                url="/api/upload"
                :multiple="true"
                accept="image/*"
                :auto="true"
                :max-file-size="2000000"
                @upload="onTemplatedUpload($event)"
                @select="onSelectedFiles"
              >
                <template #header="{ chooseCallback, clearCallback, files }">
                  <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                    <div class="flex gap-2">
                      <Button icon="pi pi-images" rounded outlined @click="chooseCallback()"></Button>
                      <Button
                        icon="pi pi-times"
                        rounded
                        outlined
                        severity="danger"
                        :disabled="!files || files.length === 0"
                        @click="clearCallback()"
                      ></Button>
                    </div>
                    <ProgressBar
                      :value="totalSizePercent"
                      :show-value="false"
                      :class="[
                        'md:w-20rem h-1rem w-full md:ml-auto',
                        { 'exceeded-progress-bar': totalSizePercent > 100 },
                      ]"
                      ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
                    >
                  </div>
                </template>
                <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                  <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                      <div
                        v-for="(file, index) of files as any"
                        :key="file.name + file.type + file.size"
                        class="card m-0 px-6 flex flex-col border-1 surface-border items-center gap-3"
                      >
                        <div>
                          <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
                        </div>
                        <span class="font-semibold">{{ file.name }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <Badge value="Pending" severity="warning" />
                        <Button
                          icon="pi pi-times"
                          outlined
                          rounded
                          severity="danger"
                          @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                        />
                      </div>
                    </div>
                  </div>

                  <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                      <div
                        v-for="(file, index) of uploadedFiles as any"
                        :key="file.name + file.type + file.size"
                        class="card m-0 px-6 flex flex-col border-1 surface-border items-center gap-3"
                      >
                        <div>
                          <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
                        </div>
                        <span class="font-semibold">{{ file.name }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <Badge value="Completed" class="mt-3" severity="success" />
                        <Button
                          icon="pi pi-times"
                          outlined
                          rounded
                          severity="danger"
                          @click="removeUploadedFileCallback(index)"
                        />
                      </div>
                    </div>
                  </div>
                </template>
                <template #empty>
                  <div class="flex items-center justify-center flex-col">
                    <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                    <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
                  </div>
                </template>
              </FileUpload>
            </div>
            <div class="flex items-center h-full rounded-xl border px-6 text-center py-3">
              <div>
                <p class="text-xs font-normal text-[#333333] mb-4">{{ $t('text.importInformation') }}</p>
                <ElementsButton class="w-fit blue-light-button">{{ $t('text.leadTemplate') }}</ElementsButton>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UIDialog>

    <!-- Dialog Export CSV -->
    <UIDialog :visible="isModalExport" root-class="w-[90%]" container-class="p-6" @update:visible="onToggleModalExport">
      <template #default="slotPropss">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between w-full">
            <p class="text-xl font-semibold">{{ $t('text.exportDataLeads') }}</p>
            <Icon
              name="mdi:close"
              class="text-[30px] text-[#798F9F] cursor-pointer"
              @click="slotPropss.closeCallback"
            />
          </div>
          <div>
            <UITable :value="leadsData">
              <template #default>
                <Column field="distributor" :header="$t('label.distributor')" style="min-width: 10rem">
                  <template #body="slotProps">
                    <p class="font-semibold">{{ slotProps.data.distributorName }}</p>
                  </template>
                </Column>
                <Column field="fullName" :header="$t('label.fullNameOwner')" style="min-width: 10rem" />
                <Column field="phoneNo" :header="$t('label.phoneNumber')" style="min-width: 10rem" />
                <Column field="businessName" :header="$t('label.businessName')" style="min-width: 10rem" />
                <Column field="businessAddress" :header="$t('label.businessAddress')" style="min-width: 10rem" />
                <Column
                  field="saldoPlafonRecommendation"
                  :header="$t('label.saldoPlafonRecommendation')"
                  style="min-width: 10rem"
                />
                <Column field="averagesBuy" :header="$t('label.averagesBuy')" style="min-width: 10rem" />
                <Column field="averagesBuyMonth" :header="$t('label.averagesBuyMonth')" style="min-width: 10rem" />
                <Column field="topOrCash" :header="$t('label.topOrCash')" style="min-width: 10rem" />
                <Column field="branchDKI" :header="$t('label.branchDKI')" style="min-width: 10rem" />
              </template>
            </UITable>
            <Divider />
            <div class="flex items-center justify-between gap-3">
              <p class="text-sm font-normal text-[#333333] w-[50%]">{{ $t('text.exportInformation') }}</p>
              <ElementsButton class="!w-[150px] blue-dark-button">
                <IconDownload class="mr-2" />
                {{ $t('text.downloadData') }}
              </ElementsButton>
            </div>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>
