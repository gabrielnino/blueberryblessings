import json

import dashscope
from dashscope import MultiModalConversation


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.
    dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

    messages = [
        {
            "role": "user",
            "content": [
                {"image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250925/thtclx/input1.png"},
                {"image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250925/iclsnx/input2.png"},
                {"image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250925/gborgw/input3.png"},
                {"text": "Make the girl from Image 1 wear the black dress from Image 2 and sit in the pose from Image 3."}
            ]
        }
    ]

    # If you have not configured the environment variable, replace the following line with your Model Studio API Key: api_key="sk-xxx"
    api_key = "sk-fc4d1fdf00414c5582f663ce0a228420"

    response = MultiModalConversation.call(
        api_key=api_key,
        model="qwen-image-2.0-pro",
        messages=messages,
        result_format='message',
        stream=False,
        n=2,
        watermark=True,
        negative_prompt=""
    )

    print(json.dumps(response, ensure_ascii=False))

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
