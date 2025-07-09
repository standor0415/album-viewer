export interface CardDTO {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string;
  asset_type: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  liked_by_user: boolean;
  likes: number;

  alternative_slugs: {
    [lang: string]: string; // ex: en, ko, ja 등
  };

  breadcrumbs: any[]; // 비어 있음 (Array(0))
  current_user_collections: any[]; // 비어 있음 (Array(0))

  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };

  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };

  topic_submissions: {
    [key: string]: any;
  };

  sponsorship: null;

  user: {
    id: string;
    username: string;
    name: string;
    first_name: string;
    // 필요하면 더 추가 가능
    [key: string]: any;
  };
}
