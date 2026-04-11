import { Button, Card, Form, Input, message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { Save } from 'lucide-react'
import React from 'react'
import { useFile } from './zustand/useFile'
import moment from 'moment'
import { nanoid } from 'nanoid'
import 'animate.css';

function App() {
  const [form] = useForm()
  const {files, setFile} = useFile()

   const createFile = (value)=>{

    value.date = moment().format("DD MMM YYYY, hh:mm A")
    value.id = nanoid()

    setFile(value)
    message.success("files saved succesfully")
    form.resetFields();
    // console.log(value)

  }

  return (
    <div className='bg-sky-100 min-h-screen'>
      <div className='w-80  fixed top-0 left-0 h-full overflow-auto flex flex-col gap-4 p-4 bg-sky-500 animate__animated animate__slideInLeft'>
        {
          files.map((file,index)=>(
            <Card hoverable>
           <Card.Meta
           className='capitalize'
           title={file.filename}
           description={file.date}
           />
           </Card>
          ))
        }
      </div>
      <div className='px-12 py-8 ml-80'>
        <Card className='shadow-lg animate__animated animate__fadeInDown'>
          <h1 className='text-4xl font-bold'>Text Editor</h1>
          <Form form={form} className='!mt-6' layout='vertical' onFinish={createFile}>
            <Form.Item
            label={<h1 className='font-medium'>Filename</h1>} 
            rules={[{required:true}]}
            name="filename"
            >
              <Input 
              placeholder='Enter Filename'
              size='large'
              />
            </Form.Item>

             <Form.Item
            label={<h1 className='font-medium'>Content</h1>} 
            rules={[{required:true}]}
            name="content"
            >
              <Input.TextArea
              placeholder='Content'
              size='large'
              rows={10}
              />
            </Form.Item>

             <Form.Item>
              <Button htmlType='submit' type='primary' danger='true'>Save <Save /> </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default App
