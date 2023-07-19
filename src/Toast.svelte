<script>
  export let showToast, toastMessage;
  import { Toasts, toast } from "svoast";

  $: if (showToast) {
    launchToast();
  }

  async function launchToast() {
    toast.success(toastMessage);
  }
</script>

<Toasts position="top-left" />
