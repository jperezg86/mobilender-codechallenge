<template>
    <div id="drag-file-upload">
        <div v-if="files.length<filesLimit" class="d-flex justify-content-center">
            <div :class="['dropZone', dragging ? 'dropZone-over' : '']" @dragenter="dragging = true" @dragleave="dragging = false">
                <div class="dropZone-info" @drag="onChange">
                    <span class="fa fa-cloud-upload dropZone-title mr-2"></span>
                    <span class="dropZone-title">Arrastra los archivos a subir</span>
                    <div class="dropZone-upload-limit-info">
                        <div>Tipo de archivo: {{extensions[fileType]}}</div>
                        <div>Tamaño Máximo del archivo: {{maxFileSize/1000000}} MB</div>
                        <div>Límite de archivos: {{filesLimit}}</div>
                        <div v-if="fileType=='image'">Resolución de Imágen: {{minImageWidth}} x {{minImageHeight}}px</div>
                    </div>
                </div>
                <input type="file" @change="onChange" :multiple="filesLimit > 1">
            </div>
        </div>
  
        <div class="uploadedFile-info">
          <ul v-if="fileType !== 'image'">
              <li v-for="(file,index) in files" v-bind:key="index">
                {{file.blob.name}}
              </li>
          </ul>

          <div class="d-flex flex-row p-2" v-if="fileType === 'image'">
            <div class="gallery-item  mr-2 position-relative" v-for="(file, index) in files" :key="index">
              <img  class="gallery-img img-thumbnail" v-bind:src="file.url">
              <i class="fa fa-times" aria-hidden="true" v-on:click="removeFile(index)"></i>
            </div>
          </div>
          
        </div>

        <div class="errors">
            <div class="text-danger" v-for="(item, index) in errors" v-bind:key="index">{{item}}</div>
        </div>
    </div>
</template>

<script>

export default {
    props : {
      //FileType to upload (text, image, pdf, etc)
      fileType : {
        type: String,
        default : 'text'
      },
      
      //limit of files that will allow upload
      filesLimit : {
        type : Number,
        default : 1
      },

      maxFileSize : {
          type : Number,
          default : 2000000
      }, 

      minImageWidth : {
        type: Number,
        default : 1920
      },

      minImageHeight : {
        type : Number, 
        default: 1080
      },

      value : {
        type : Array,
         default: function() { return [];}
      }

    },
     data (){
         return { 
             files : [],
             dragging: false,
             extensions  : {
                text : 'txt',
                pdf : 'pdf', 
                image : 'png,jpg,gif,svg,jpeg'
              },
            errors : [ ]
         }
    },
    methods: {
        onChange(e) {
            this.errors = [];
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                this.dragging = false;
                return;
            }
            if(files.length > this.filesLimit) {
              files = Array.prototype.slice.call(files,0,this.filesLimit);
            }

            files.forEach((item,index) => this.createFile(item,index));
        },

        createFile(file, index) {
            //if file type is the same as accepted by the config prop
            if (this.extensions[this.fileType].search(file.type.split("/")[1]) < 0) {
                this.dragging = false;
                this.errors.push(file.name + " no es de tipo: " +this.fileType);
                return;
            }
            
            if (file.size > this.maxFileSize) {
                this.errors.push(file.name + " excede del tamaño máximo permitido"); 
                this.dragging = false;
                return;
            }

            if(this.fileType === "image") {
                const reader = new FileReader();
                let that=this;
                reader.onload = function(e) {
                      const image = new Image();
                      image.src = e.target.result;
                      image.onload = function() {
                          if(this.width<that.minImageWidth || this.height<that.minImageHeight){
                              that.files.splice(index,1);
                              that.errors.push(file.name + " no cumple con las dimensiones específicadas ");
                          }else {
                            that.files.push({
                              blob : file,
                              url : e.target.result
                            });
                          }
                      }
                      
                };
                reader.readAsDataURL(file);
            }else{
              this.files.push({blob : file});
            }
            this.dragging = false;
        },

        removeFile(index) {
          this.files.splice(index,1); 
        },
  },
  computed: {
    extension() {
      return (this.file) ? this.file.name.split('.').pop() : '';
    }
  },

  watch : {
    value(value) {
      this.files = value;
    },

    files(files) { 
      this.$emit("input",files);
    }
  }
}
</script>

<style scoped> 
.dropZone {
  width: 100%;
  height: 120px;
  position: relative;
  border: 2px dashed #eee;
}

.dropZone:hover {
  border: 2px solid #2e94c4;
}

.dropZone:hover .dropZone-title {
  color: #1975A0;
}

.dropZone-info {
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.dropZone-title {
  color: #787878;
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.dropZone-over {
  background: #5C5C5C;
  opacity: 0.8;
}

.dropZone-uploaded {
  /* width: 80%; */
  /* height: 200px; */
  position: relative;
  border: 2px dashed #eee;
}

.dropZone-uploaded-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.removeFile {
  width: 200px;
}

.gallery-item i{
    font-size: 1.5em;
    position: absolute;
    top: -0.3em;
    right: -0.3em;
}
.gallery-img.img-thumbnail {
    width: 200px!important;
}

</style>