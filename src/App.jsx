import { Button, Card, Form, Input } from 'antd'
import { Save } from 'lucide-react'
import React from 'react'

function App() {

  const createFile = (value)=>{
    console.log(value)
  }

  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='w-80 bg-white fixed top-0 left-0 h-full overflow-auto'></div>
      <div className='px-12 py-8 ml-80'>
        <Card className='shadow-lg'>
          <h1 className='text-4xl font-bold'>Text Editor</h1>
          <Form className='!mt-6' layout='vertical' onFinish={createFile}>
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
