import { Divider, Empty, Image, Modal, Tabs } from "antd";
import React, { useState }                    from "react";
import ShowMore                               from "react-show-more-button/dist";

import { NO_IMAGE }     from "config/constants";
import { BlogModel }    from "pages/Blog/models/BlogModel";
import BlogCommentList  from "./BlogCommentList";

interface IProps {
  title: string;
  visible: boolean;
  data: BlogModel;
  onCancel: () => void;
}

const { TabPane } = Tabs;

const PreviewBlogModal = (props: IProps) => {
  const { title, visible, data, onCancel } = props;
  const [isSeeMoreBlogContent, setSeeMoreBlogContent] = useState<boolean>(true);

  const handleChangeSeeMoreContent = (showValue: boolean) => {
    setSeeMoreBlogContent(showValue);
  };

  return (
    <Modal
      title={title}
      centered
      width={1000}
      onCancel={onCancel}
      footer={null}
      visible={visible}
    >
      <div className="d-flex">
        <Image src={data.thumbnail || NO_IMAGE} />
        <div className="flex-grow-1" style={{ paddingLeft: 20 }}>
          <h4>{data.name}</h4>
          <div>
            <div dangerouslySetInnerHTML={{ __html: data.short_description }} />
          </div>
        </div>
      </div>
      <Divider />
      <div className="row">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Nội dung bài viết" key="1">
            {data.content ? (
              <ShowMore
                defaultAnchor={isSeeMoreBlogContent}
                maxHeight={150}
                button={
                  <button className="btn-see-more">
                    {isSeeMoreBlogContent ? "Xem thêm" : "Ẩn bớt"}
                  </button>
                }
                onChange={handleChangeSeeMoreContent}
              >
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              </ShowMore>
            ) : (
              <Empty />
            )}
          </TabPane>
          <TabPane tab="Bình luận" key="2">
            <BlogCommentList blog_id={data.id}/>
          </TabPane>
        </Tabs>
      </div>
    </Modal>
  );
};

export default React.memo(PreviewBlogModal);
