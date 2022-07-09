import boto3

from backend.core.settings import settings

session = boto3.session.Session()
s3_client = session.client(
    service_name="s3",
    endpoint_url="https://hb.bizmrg.com",
    aws_access_key_id=settings.mcs_storage_access_key_id,
    aws_secret_access_key=settings.mcs_storage_secret_key_id,
)
