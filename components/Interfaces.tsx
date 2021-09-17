export interface ImageDetails {
  href: string;
  links: { href: string; render: string; rel: string }[];
  data: {
    nasa_id: string;
    location: string;
    center: string;
    title: string;
    description: string;
    date_created: string;
    media_type: string;
  }[];
}
