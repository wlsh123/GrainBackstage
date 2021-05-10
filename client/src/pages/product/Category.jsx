import React, { Component } from "react";
import { Card, Button, Table, message, Modal } from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import LinkButton from "../../components/link-button";
import { reqCategoryList, reqUpdateCategory } from "../../api/index";
import AddForm from "../../components/category/addForm/AddForm";
import UpdateForm from "../../components/category/updateForm/UpdateForm";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, //是否正在获取数据中
      categorys: [], //一级分类数组
      subCategorys: [],
      parentId: "0",
      parentName: "",
      showStatus: 0, //标识添加/更新的确认框是否显示。
    };
  }
  // 初始化Table所有列的数组;
  initColums = () => {
    this.columns = [
      {
        title: "分类名",
        dataIndex: "name", //显示数据对应的属性名
        key: "name",
      },
      {
        width: "25%",
        title: "操作",
        key: "operation",
        render: (category) => (
          //返回需要显示的界面标签
          <span>
            <LinkButton onClick={() => this.showUpdate(category)}>
              修改分类
            </LinkButton>
            {this.state.parentId === "0" ? (
              <LinkButton onClick={() => this.showSubCategorys(category)}>
                查看子分类
              </LinkButton>
            ) : null}
          </span>
        ),
      },
    ];
  };
  //显示指定一级分类对象的子集列表
  showSubCategorys = (category) => {
    this.setState(
      {
        parentId: category._id,
        parentName: category.name,
      },
      () => {
        //setState()不能立即获取最新的状态：因为setState()是异步更新状态的
        this.getCategory();
      }
    );
  };
  //显示上级分类列表
  showFirstCategorys = () => {
    this.setState({
      //更新为显示一级列表的状态
      parentId: "0",
      parentName: "",
      subCategorys: [],
    });
  };
  getCategory = async () => {
    this.setState({ loading: true });
    const { parentId } = this.state;
    const result = await reqCategoryList(parentId);
    if (result.data.status === 0) {
      const categorys = result.data.data1;
      const subCategorys = result.data.data2;
      //更新状态
      if (parentId === "0") {
        this.setState({ categorys, loading: false });
      } else {
        this.setState({ subCategorys, loading: false });
      }
    } else {
      message.error("获取数据失败");
    }
  };
  //响应点击取消：隐藏确认框
  handleCancel = () => {
    this.setState({
      showStatus: 0,
    });
  };
  //显示添加的确认框
  showAdd = () => {
    this.setState({
      showStatus: 1,
    });
  };
  //添加分类
  addCategory = () => {};
  //显示修改的确认框
  showUpdate = (category) => {
    this.category = category;
    this.setState({
      showStatus: 2,
    });
  };
  //更新分类
  updateCategory = () => {
    //1.隐藏确定框
    this.setState({
      showStatus: 0,
    });
    //2.发请求更新数据
    const result = reqUpdateCategory({ categoryId, categoryName });
    if (result.status === 0) {
      //3.重新显示列表
      this.getCategory();
    }
  };
  //为第一次render准备数据
  UNSAFE_componentWillMount() {
    this.initColums();
  }
  //发异步ajax请求
  componentDidMount() {
    this.getCategory();
  }
  render() {
    const {
      categorys,
      subCategorys,
      parentName,
      parentId,
      loading,
      showStatus,
    } = this.state;
    const category = this.category || {};
    //Card的左侧
    const title =
      parentId === "0" ? (
        "一级分类列表"
      ) : (
        <span>
          <LinkButton onClick={this.showFirstCategorys}>
            一级分类列表
          </LinkButton>
          <RightOutlined style={{ marginRight: 5 }} />
          <span>{parentName}</span>
        </span>
      );
    //Card的右侧
    const extra = (
      <Button type="primary" onClick={this.showAdd}>
        <PlusOutlined />
        添加
      </Button>
    );
    return (
      <div>
        <Card title={title} extra={extra} style={{ width: "100%" }}>
          <Table
            dataSource={parentId === "0" ? categorys : subCategorys}
            columns={this.columns}
            bordered
            rowKey="_id"
            pagination={{ defaultPageSize: 5, showQuickJumper: true }}
            loading={loading}
          />
          <Modal
            title="添加分类"
            visible={showStatus === 1}
            onOk={this.addCategory}
            onCancel={this.handleCancel}
          >
            <AddForm />
          </Modal>
          <Modal
            title="更新分类"
            visible={showStatus === 2}
            onOk={this.updateCategory}
            onCancel={this.handleCancel}
          >
            <UpdateForm categoryName={category.name} />
          </Modal>
        </Card>
      </div>
    );
  }
}

export default Category;
