import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  SelectControl,
  Button,
  Placeholder,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import "./editor.scss";

export default function Edit(props) {
  const {
    attributes: {
      selectedPosts,
      buttonText,
      SectionPadding,
      subtitle,
      heading,
      description,
      icon,
    },
    setAttributes,
  } = props;
  const [allPosts, setAllPosts] = useState([]);
  const [orderedPosts, setOrderedPosts] = useState(selectedPosts);
  const { posts } = useSelect((select) => {
    const posts = select("core").getEntityRecords("postType", "careers", {
      per_page: -1,
      _embed: true,
    });
    return { posts: posts };
  }, []);

  useEffect(() => {
    if (posts) {
      setAllPosts(
        posts.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
        }))
      );
    }
  }, [posts]);

  useEffect(() => {
    setOrderedPosts(selectedPosts);
  }, [selectedPosts]);

  const addPost = (postId) => {
    if (postId && !orderedPosts.includes(postId)) {
      const newOrderedPosts = [...orderedPosts, postId];
      setOrderedPosts(newOrderedPosts);
      setAttributes({ selectedPosts: newOrderedPosts });
    }
  };

  const removePost = (postId) => {
    const newOrderedPosts = orderedPosts.filter((id) => id !== postId);
    setOrderedPosts(newOrderedPosts);
    setAttributes({ selectedPosts: newOrderedPosts });
  };

  const movePostUp = (index) => {
    if (index > 0) {
      const newOrderedPosts = [...orderedPosts];
      [newOrderedPosts[index - 1], newOrderedPosts[index]] = [
        newOrderedPosts[index],
        newOrderedPosts[index - 1],
      ];
      setOrderedPosts(newOrderedPosts);
      setAttributes({ selectedPosts: newOrderedPosts });
    }
  };

  const movePostDown = (index) => {
    if (index < orderedPosts.length - 1) {
      const newOrderedPosts = [...orderedPosts];
      [newOrderedPosts[index + 1], newOrderedPosts[index]] = [
        newOrderedPosts[index],
        newOrderedPosts[index + 1],
      ];
      setOrderedPosts(newOrderedPosts);
      setAttributes({ selectedPosts: newOrderedPosts });
    }
  };

  const onChangeButtonText = (newButtonText) => {
    setAttributes({ buttonText: newButtonText });
  };

  const onChangeSubtitle = (newSubtitle) => {
    setAttributes({ subtitle: newSubtitle });
  };

  const onChangeHeading = (newHeading) => {
    setAttributes({ heading: newHeading });
  };

  const onChangeDescription = (newDescription) => {
    setAttributes({ description: newDescription });
  };

  const onChangeIcon = (newIcon) => {
    setAttributes({ icon: newIcon });
  };

  const postOptions = allPosts.map((post) => ({
    label: post.title,
    value: post.id,
  }));

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Settings")}>
          <TextControl
            label={__("Button Text", "qrolic")}
            value={buttonText}
            onChange={onChangeButtonText}
          />
          <TextControl
            label={__("Icon", "qrolic")}
            value={icon}
            onChange={onChangeIcon}
            placeholder={__("Enter icon class name")}
          />
          <TextControl
            label={__("Section Padding", "qrolic")}
            value={SectionPadding}
            onChange={(newPadding) =>
              setAttributes({ SectionPadding: newPadding })
            }
            placeholder={__("Enter padding class")}
          />
          <PanelBody title={__("Select Posts", "qrolic")}>
            <SelectControl
              label={__("Add Post", "qrolic")}
              value=""
              options={[
                { label: __("Select a post", "qrolic"), value: "" },
              ].concat(postOptions)}
              onChange={(postId) => addPost(parseInt(postId))}
            />
            {orderedPosts.length > 0 && (
              <div>
                <h3>{__("Selected Posts", "qrolic")}</h3>
                <ul>
                  {orderedPosts.map((postId, index) => {
                    const post = allPosts.find((p) => p.id === postId);
                    return post ? (
                      <li key={postId}>
                        {post.title}
                        <Button
                          isLink
                          onClick={() => movePostUp(index)}
                          disabled={index === 0}
                          className="move-post-button"
                          style={{ marginRight: "5px" }}
                        >
                          up
                        </Button>
                        <Button
                          isLink
                          onClick={() => movePostDown(index)}
                          disabled={index === orderedPosts.length - 1}
                          className="move-post-button"
                          style={{ marginRight: "5px" }}
                        >
                          down
                        </Button>
                        <Button
                          isDestructive
                          onClick={() => removePost(postId)}
                          className="remove-post-button"
                        >
                          X
                        </Button>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            )}
          </PanelBody>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()}>
        <div className={`we-are-hiring ${SectionPadding}`}>
          <div className="container p-0">
            <div className="we-are-hiring__inner">
              <div className="row">
                <div className="col-lg-10 col-md-12 col-12 mx-auto">
                  <div className="we-are-hiring__subtitle">
                    <RichText
                      tagName="p"
                      className="we-are-hiring__subtitle_content qt-color-green"
                      value={subtitle}
                      onChange={onChangeSubtitle}
                      placeholder={__("Enter Subtitle...")}
                    />
                  </div>
                  <div className="we-are-hiring__title">
                    <RichText
                      tagName="h2"
                      className="we-are-hiring__heading"
                      value={heading}
                      onChange={onChangeHeading}
                      placeholder={__("Enter Heading...")}
                    />
                  </div>
                  <div className="we-are-hiring__description">
                    <RichText
                      tagName="p"
                      className="description-primary"
                      value={description}
                      onChange={onChangeDescription}
                      placeholder={__("Enter Description...")}
                    />
                  </div>
                </div>
              </div>
              <div className="row gy-5 gx-5">
                {orderedPosts.length === 0 ? (
                  <Placeholder label={__("No posts selected")}>
                    <p>{__("Please select posts from the Inspector.")}</p>
                  </Placeholder>
                ) : (
                  orderedPosts.map((postId) => {
                    const post = allPosts.find((post) => post.id === postId);
                    return post ? (
                      <div
                        key={postId}
                        className="col-lg-6 col-md-12 col-sm-12 col-12"
                      >
                        <div className="we-are-hiring__item">
                          <div className="row g-0">
                            <div className="col-lg-9 col-md-8 col-sm-8 col-12">
                              <div className="we-are-hiring__item_text">
                                  <RichText.Content
                                    tagName="h3"
                                    value={post.title}
                                    className="description-primary"
                                  />
                                  <RichText.Content
                                    tagName="p"
                                    className="description-secondary"
                                    value={post.excerpt}
                                  />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-4 col-12 g-0">
                              <div className="we-are-hiring__item_button">
                                <a className="button-view-post-service">
                                  <RichText.Content value={buttonText} />
                                  {icon && (
                                    <i
                                      className={`icon ${icon}`}
                                      aria-hidden="true"
                                    ></i>
                                  )}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
