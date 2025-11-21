import type { Attribute, Schema } from '@strapi/strapi';

export interface LinkIconLink extends Schema.Component {
  collectionName: 'components_link_icon_links';
  info: {
    displayName: 'IconLink';
    icon: 'file';
  };
  attributes: {
    icon: Attribute.Enumeration<['instagram', 'facebook']> & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
    icon: 'bulletList';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'meta';
    icon: 'apps';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'link.icon-link': LinkIconLink;
      'link.link': LinkLink;
      'seo.meta': SeoMeta;
    }
  }
}
