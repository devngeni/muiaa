export type HeadMetaDataProps = {
  pageTitle?: string | undefined;
};

export interface LayoutProps extends HeadMetaDataProps {
  children: React.ReactNode;
}
