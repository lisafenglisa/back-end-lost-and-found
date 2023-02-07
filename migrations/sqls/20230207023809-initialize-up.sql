/* Replace with your SQL commands */

-- Table: public.items

-- DROP TABLE IF EXISTS public.items;

CREATE TABLE IF NOT EXISTS public.items
(
    item_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 3000 CACHE 1 ),
    title text COLLATE pg_catalog."default" NOT NULL,
    category text COLLATE pg_catalog."default" NOT NULL,
    location text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    finder_name text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    date text COLLATE pg_catalog."default",
    image bytea,
    CONSTRAINT items_pkey PRIMARY KEY (item_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.items
    OWNER to postgres;