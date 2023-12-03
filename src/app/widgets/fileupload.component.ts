import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'vo-mat-fileUpload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {
  @Input()  multiple: boolean = true
  @Input()  accept: any
   
  @Input() chooseLabel = 'Choose'
  
  @Input() deleteButtonLabel: any
  @Input() deleteButtonIcon = 'close'


  @ViewChild('fileUpload') fileUpload!: ElementRef;

  inputFileName: string | undefined

  @Input() files: File[] = []

  constructor(private sanitizer: DomSanitizer) {

  }

  onClick(event: Event) {
    if (this.fileUpload)
      this.fileUpload.nativeElement.click()
  }

  onInput(event: Event) {

  }

  onFileSelected(event: any) {
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      if (this.validate(file)) {
        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
        if (!this.isMultiple()) {
          this.files = []
        }
        this.files.push(files[i]);
      }
    }
  }

  removeFile(event: any, file: File) {
    let ix
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1)
      this.clearInputElement()
    }
  }

  validate(file: File) {
    for (const f of this.files) {
      if (f.name === file.name
        && f.lastModified === file.lastModified
        && f.size === f.size
        && f.type === f.type
      ) {
        return false
      }
    }
    return true
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = ''
  }


  isMultiple(): boolean {
    return this.multiple
  }

}
