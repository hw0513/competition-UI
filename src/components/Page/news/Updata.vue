<template>
  <div class="hello">
    <form>
      <input type="file" @change="getFile($event)">
      <button class="button button-primary button-pill button-small" @click="submit($event)">提交</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: ''
      }
    },
    methods: {
      getFile: function (event) {
        this.file = event.target.files[0];
      },
      submit: function (event) {
        //阻止元素发生默认的行为
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);
        this.$http.post('http://47.97.223.234/upload/testuploadimg', formData)
          .then(function (response) {
            alert(response.bodyText);
            window.location.reload();
          })
          .catch(function (error) {
            alert("上传失败");
            window.location.reload();
          });
      }
    }
  }
</script>