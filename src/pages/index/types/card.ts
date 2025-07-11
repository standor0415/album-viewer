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
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: string | null;
    twitter_username?: string | null;
    portfolio_url?: string | null;
    bio?: string | null;
    location?: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username?: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social?: {
      instagram_username?: string;
      portfolio_url?: string;
      twitter_username?: string;
      paypal_email?: string;
    };
  };
}
