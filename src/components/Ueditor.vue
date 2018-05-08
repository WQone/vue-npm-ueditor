<template>
  <div>
    <!--editor的div为富文本的承载容器-->
    <div :id="id"></div>
  </div>
</template>

<script>
/* eslint-disable */
import '../../static/Ueditor/ueditor.config';
import '../../static/Ueditor/ueditor.all.min';  // 此为修正单次上传增加$.ajax接口的文件 -- 谷歌本地线上都OK，IE下都报错
import '../../static/Ueditor/ueditor.parse.min';
import '../../static/Ueditor/lang/zh-cn/zh-cn';

export default {
  data() {
    return {
      id: Math.ceil(Math.random() * 100000) + 'editor',
      editor: null,
    };
  },
  props: {
    disabled: {
      default: false,
    },
  },
  mounted() {
    this.editor = UE.getEditor(this.id, {
      initialFrameWidth: '100%',
      initialFrameHeight: 300,
      autoClearinitialContent: true,
      focus: false,
      zIndex: 900,
      autoHeightEnabled: false, // 是否自动长高
      readonly: this.disabled, // 编辑区域是否是只读的
      enableAutoSave: false, // 去除自动保存
      indentValue: '28px',
    });
    this.$emit('ueditorText', this.editor);
  },
  destroyed() { },
};
</script>
