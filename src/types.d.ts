export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  total_clicks: number;
  total_page_views: number;
}

export interface Statistic {
  user_id: number;
  date: string;
  page_views: number;
  clicks: number;
}
