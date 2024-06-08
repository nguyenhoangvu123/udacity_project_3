export const config = {
  'username': process.env.POSTGRES_USERNAME || 'postgres',
  'password': process.env.POSTGRES_PASSWORD || 'postgres',
  'database': process.env.POSTGRES_DB || 'postgres',
  'host': process.env.POSTGRES_HOST || 'postgres.cpq1kgfgw2hv.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION || 'us-east-1',
  'aws_profile': process.env.AWS_PROFILE || 'default',
  'aws_media_bucket': process.env.AWS_BUCKET || 'udagram-12345-dev' ,
  'url': process.env.URL || 'http://localhost:8100',
  'jwt': {
    'secret': process.env.JWT_SECRET || 'testing',
  }
};
