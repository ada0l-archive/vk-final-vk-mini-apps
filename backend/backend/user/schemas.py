from fastapi_azure_auth import SingleTenantAzureAuthorizationCodeBearer
from pydantic import BaseModel, Field

from backend.core.settings import settings


class UserInUpdatePermissions(BaseModel):
    read_permission: list[int]
    write_permission: list[int]


class UserBasePydantic(BaseModel):
    id: str
    read_permission: list[int] = Field(default=[0])
    write_permission: list[int] = Field(default=[0])


class UserPydantic(UserBasePydantic):
    class Config:
        orm_mode = True


class UserInCreatePydantic(UserBasePydantic):
    pass


class UserInUpdatePydantic(UserBasePydantic):
    pass
