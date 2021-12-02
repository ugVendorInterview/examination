## 第一步：获取项目并启动项目
1. 进入 https://github.com/ugVendorInterview/examination， 通过fork到自己的账户下的一个新仓库中
2. 将代码clone到本地，安装依赖并运行成功代码（请在package.json中查看dev环境运行的命令）

## 第二步：完成表单数据功能补全
后台开发基础组件库采用： https://arco.design/
雇员信息获取接口： https://dummy.restapiexample.com/api/v1/employees
### 任务一：补全获取列表方法()
  接口地址：https://dummy.restapiexample.com/api/v1/employees
  要求：
1.  数据请求成功后，将数据中列表的部分通过setTableData进行数据更新，并通过全局提示Message组件弹出成功提示"列表拉取成功！"
2. 如果数据请求失败，则通过全局提示Message组件弹出失败提示"雇员列表获取失败，请重试"

### 任务二：开发弹窗中表单内容
要求：
1. 编辑和新建共用同一个弹窗表单，新建时要求表单无初始值，编辑要求使用表格中所在行的数据作为初始值
2. 要求编辑的字段有
  1. 姓名，对应字段employee_name，必填，placeholder内容为“请填写雇员姓名”
  2. 年龄，对应字段employee_age，非必填， placeholder内容为“请输入雇员年龄”，要求年龄最小值为18，最大值为100， 只能填写数字
  3. 工资，对应字段employee_salary，必填，placeholder内容为“请录入雇员工资”，要求工资最小值为0， 只能填写数字（加分项，进行千分位处理，并增加¥前缀）

### 任务三：完成弹窗点击确认之后的回调
要求：进行表单校验，在校验成功后，根据当前所处的状态（根据isCreating这个变量判断）进行数据展示
1. 当isCreating=== true（表示新建状态），则通过全局提示Message组件弹出成功提示，提示内容为 "雇员信息录入成功" + 当前表单填写的信息
2. 当isCreating=== false（表示编辑状态），则通过全局提示Message组件弹出成功提示，提示内容为 "雇员信息更新成功" + 更新雇员的id +当前表单填写的信息
3. 在数据展示结束之后，重置表单内容并重新拉取表格数据


## 第三步： 将完成的代码提交到仓库中
要求：完成后通过git操作将修改的代码提到远端，commit记录要求commit message清晰简明地写出本次代码修改的信息
加分项：可以将这次的修改，发起PR，提交到 https://github.com/ugVendorInterview/examination
