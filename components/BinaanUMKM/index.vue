<script setup lang="ts">
import { dataUMKM } from '~/utilities/dummy'
import Column from 'primevue/column'
import { useBinaanUmkm } from './binaan-umkm-setup'

function onGoToPage() {
  //
}
function onPerPageChange() {
  //
}

const { isModalImport, onToggleModalImport } = useBinaanUmkm()
</script>

<template>
  <div>
    <div>
      <div class="flex justify-end items-center gap-3 mb-4">
        <div>
          <ElementsInputText
            id="search"
            :placeholder="$t('text.searchData')"
            container-class="w-[240px]"
            icon-position="left"
          >
            <template #icon> <i class="pi pi-search"></i> </template>
          </ElementsInputText>
        </div>
        <div>
          <ElementsButton @click="navigateTo('/manage-umkm/add')">
            <i class="pi pi-plus mr-2"></i>
            {{ $t('text.addData') }}
          </ElementsButton>
        </div>
        <div>
          <ElementsButton class="!bg-[#FDF0F1] !text-[#FF234B]">
            <IconSheets class="mr-2" />
            {{ $t('text.importCsv') }}
          </ElementsButton>
        </div>
      </div>
      <UITable :value="dataUMKM">
        <template #default>
          <Column
            field="nama"
            :header="$t('label.fullName')"
            sortable
            style="min-width: 10rem; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
            <template #body="slotProps">
              <p class="text-sm font-semibold">{{ slotProps.data.nama }}</p>
            </template>
          </Column>
          <Column field="telepon" :header="$t('label.noHp')" style="min-width: 10rem" />
          <Column
            field="jenis_usaha"
            :header="$t('label.businessType')"
            sortable
            style="min-width: 10rem; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column
            field="nama_usaha"
            :header="$t('label.businessName')"
            sortable
            style="min-width: 10rem; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column
            field="alamat_usaha"
            :header="$t('label.businessAddress')"
            sortable
            style="min-width: 10rem; text-transform: capitalize"
          >
            <template #sorticon>
              <IconSortable />
            </template>
          </Column>
          <Column field="action" :header="$t('label.action')" style="min-width: 6rem; text-align: center">
            <template #body>
              <ElementsButton
                class="!text-[12px] !rounded-full !h-fit !w-fit py-0 px-5"
                @click="navigateTo('/manage-umkm/edit/1')"
              >
                {{ $t('text.detail') }}
              </ElementsButton>
            </template>
          </Column>
        </template>
      </UITable>
    </div>

    <div class="px-8 -mx-[32px]">
      <UIPagination
        :item-count="5"
        :per-page="5"
        :total-data="6"
        :on-go-to-page="onGoToPage"
        :on-page-size-change="onPerPageChange"
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
            <p class="text-xl font-semibold">{{ $t('text.importDataUmkm') }}</p>
            <Icon name="mdi:close" class="text-[30px] text-[#798F9F] cursor-pointer" @click="slotProps.closeCallback" />
          </div>
          <div class="grid grid-cols-2 content-center gap-3 mt-4">
            <img src="/images/upload-file-red.svg" class="cursor-pointer" />
            <!-- <div class="rounded-xl border border-dashed !border-color-[#1F76B6] px-6 text-center py-3">
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
            </div> -->
            <div class="flex items-center h-full rounded-xl border px-6 text-center py-3">
              <div>
                <p class="text-xs font-normal text-[#333333] mb-4">{{ $t('text.importUmkmInformation') }}</p>
                <ElementsButton class="w-fit red-dark-button">{{ $t('text.umkmTemplate') }}</ElementsButton>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UIDialog>
  </div>
</template>
