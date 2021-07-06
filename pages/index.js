import { Heading, Page, TextStyle, Layout, EmptyState} from "@shopify/polaris";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    <Layout>
      <EmptyState // Empty state component
        heading="Banner Message"
        action={{
          content: 'Edit your banner.',
          onAction: () => this.setState({ open: true }),
        }}
        image={img}
      >
        <p>Edit your banner message and plan to publish.</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;