<script setup lang="ts">
import { useLogout } from '~/composable/layout'

// navigateTo('/')

onBeforeMount(() => {
  useLogout()
})
</script>
