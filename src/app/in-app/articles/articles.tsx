import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useGetArticlesSource1, useGetArticlesSource2, useGetArticlesSource3, useGetArticlesSource4, useGetSelectedArticles } from '../../hooks/travel-app-hooks';
import styles from './articles.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function Articles() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { travelAppArticlesSource1 } = useGetArticlesSource1();
  const { travelAppArticlesSource2 } = useGetArticlesSource2();
  const { travelAppArticlesSource3 } = useGetArticlesSource3();
  const { travelAppArticlesSource4 } = useGetArticlesSource4();
  const { travelAppSelectedArticles } = useGetSelectedArticles();

  return (
    <>
      <div className={classes("row-layout articles-container")}>
        <div className={classes("row-layout all-articles")}>
          <div className={classes("column-layout group")}>
            <h6 className={classes("h6")}>
              <span>All articles</span>
            </h6>
            <div className={classes("row-layout group_1")}>
              {travelAppArticlesSource1?.map((item) => (
                <IgrCard className={classes("card")} key={uuid()}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src={item.image_url} className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>{item.title}</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}></span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <p className={classes("typography__body-2 text")} key={uuid()}>
                      <span>{item.subtitle}</span>
                    </p>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button")}>
                        <span key={uuid()}>READ</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>favorite</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                      <IgrIconButton variant="flat" className={classes("icon-button_1")} key={uuid()}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>share</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              ))}
              {travelAppArticlesSource2?.map((item) => (
                <IgrCard className={classes("card")} key={uuid()}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src={item.image_url} className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>{item.title}</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}></span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <p className={classes("typography__body-2 text")} key={uuid()}>
                      <span>{item.subtitle}</span>
                    </p>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button")}>
                        <span key={uuid()}>READ</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button_2")} key={uuid()}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>favorite</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                      <IgrIconButton variant="flat" className={classes("icon-button_3")} key={uuid()}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>bookmark</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                      <IgrIconButton variant="flat" className={classes("icon-button_4")} key={uuid()}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>share</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              ))}
              {travelAppArticlesSource3?.map((item) => (
                <IgrCard className={classes("card")} key={uuid()}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src={item.image_url} className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>{item.title}</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}></span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <p className={classes("typography__body-2 text")} key={uuid()}>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                    </p>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button")}>
                        <span key={uuid()}>READ</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button_5")} key={uuid()}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>favorite</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                      <IgrIconButton variant="flat" className={classes("icon-button_6")} key={uuid()}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>share</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              ))}
              {travelAppArticlesSource4?.map((item) => (
                <IgrCard className={classes("card")} key={uuid()}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src={item.image_url} className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>{item.title}</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}></span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <p className={classes("typography__body-2 text")} key={uuid()}>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                    </p>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button")}>
                        <span key={uuid()}>READ</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button_7")} key={uuid()}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>favorite</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                      <IgrIconButton variant="flat" className={classes("icon-button_8")} key={uuid()}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>share</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              ))}
            </div>
          </div>
        </div>
        <div className={classes("column-layout recommended")}>
          <div className={classes("column-layout group_2")}>
            <h6 className={classes("h6")}>
              <span>Recommended</span>
            </h6>
            <div className={classes("column-layout group_3")}>
              {travelAppSelectedArticles?.map((item) => (
                <IgrCard className={classes("card_1")} key={uuid()}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src={item.image_url} className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>{item.title}</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>{item.subtitle}</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button")}>
                        <span key={uuid()}>Read</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" key={uuid()}>
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>bookmark_border</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                      <IgrIconButton variant="flat" key={uuid()}>
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>share</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
