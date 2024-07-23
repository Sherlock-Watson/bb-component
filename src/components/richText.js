(() => ({
  name: 'RichText2',
  type: 'CONTENT_COMPONENT',
  icon: 'TitleIcon',
  orientation: 'HORIZONTAL',
  allowedTypes: [],
  dependencies: [
    {
      label: 'ckeditor5',
      package: 'npm:ckeditor5@42.0.1',
      imports: ['*']
    },
    {
      label: 'CKEditor',
      package: 'npm:@ckeditor/ckeditor5-react@8.0.0',
      imports: ['CKEditor']
    }
  ],
  jsx: (() => {
    const {CKEditor} = dependencies.CKEditor
    const {ClassicEditor, Bold, Essentials, Italic} = dependencies.ckeditor5
    useEffect(() => {
      let linkElement = document.createElement('link')
      linkElement.rel = 'stylesheet'
      linkElement.href = 'https://cdn.ckeditor.com/ckeditor5/42.0.1/ckeditor5.css'
      document.head.appendChild(linkElement)
    }, [])
    return (

      <CKEditor
        editor={ ClassicEditor }
        config={ {
            toolbar: {
                items: [ 'bold', 'italic'],
            },
            plugins: [
                Bold, Essentials, Italic
            ],
            initialData: '<p>123123</p>',
        }}
        onChange={(ev, editor) => {
          console.log(editor.getData())
        }}
      >
      </CKEditor>
                
    )
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      root: {
        
      },
    };
  },
}))();
