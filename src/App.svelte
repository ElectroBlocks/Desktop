<script>
  async function uploadCode() {
    // @ts-ignore
    const didUpload = await api.uploadCode(`
        void setup() {

        }


        void loop() {

        }
      `);

    alert(`Code did upload ${didUpload}.`);
  }
</script>

<main>
  <button on:click={uploadCode}>Upload Code</button>
</main>
