export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface FashionEvent {
  id: string;
  title: string;
  description: string;
  venue: string;
  capacity: number;
  start_time: string;
  end_time: string;
  registration_deadline: string;
  theme?: string | null;
  meta_description?: string | null;
  meta_keywords?: string[] | null;
  created_at: string;
  updated_at: string;
  name: "valentines_fashion_show" | "spring_fling_fashion_show" | "summer_splash_fashion_show" | "fall_fantasy_fashion_show" | "swim_paradise_show";
  subtype: "main_show" | "vip_session" | "workshop" | "networking" | "photo_session" | "after_party" | "swimwear";
  event_content?: Array<{
    id: string;
    event_id: string | null;
    content_type: string;
    title: string;
    content: string;
    media_urls?: string[] | null;
    publish_date?: string | null;
    engagement_metrics?: Json | null;
    created_at: string;
    updated_at: string;
  }> | null;
  fashion_collections?: Array<{
    id: string;
    designer_id?: string | null;
    event_id: string | null;
    collection_name: string;
    description: string;
    piece_count: number;
    technical_requirements?: string | null;
    sustainability_info?: string | null;
    created_at: string;
    updated_at: string;
  }> | null;
  fashion_images?: Array<{
    id: string;
    category: "event_hero" | "event_gallery" | "backstage" | "designer_profile" | "model_profile" | "promotional" | "press_kit";
    url: string;
    thumbnail_url?: string | null;
    alt_text: string;
    metadata?: Json | null;
    credits?: string | null;
    event_id: string | null;
    created_at: string;
    updated_at: string;
    dimensions?: Json | null;
    formats?: Json | null;
  }> | null;
  event_tickets?: Array<{
    id: string;
    event_id: string | null;
    ticket_type: string;
    price: number;
    quantity_available: number;
    benefits?: string[] | null;
    early_bird_deadline?: string | null;
    early_bird_price?: number | null;
    group_discount_threshold?: number | null;
    group_discount_percentage?: number | null;
    created_at: string;
    updated_at: string;
  }> | null;
}


