from datetime import datetime
from backend.user.schemas import UserInCreatePydantic, UserPydantic
from pydantic import BaseModel


class PhotoBasePydantic(BaseModel):
    uuid_str: str | None
    text: str | None
    user_id: int
    user_to_id: int


class PhotoPydantic(PhotoBasePydantic):
    id: int
    time_created: datetime

    class Config:
        orm_mode = True


class PhotoInCreatePydantic(PhotoBasePydantic):
    pass


class PhotoInUpdatePydantic(PhotoBasePydantic):
    pass
