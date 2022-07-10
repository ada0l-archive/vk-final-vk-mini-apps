from email.policy import default
from http.client import HTTPException
import uuid
import base64

from fastapi import APIRouter, Depends, File, UploadFile, Form
from sqlalchemy import select

from backend.core.database import get_session
from backend.photo.repository import PhotoRepository
from backend.photo.schemas import PhotoInCreatePydantic, PhotoPydantic
from backend.user.repository import UserRepository
from backend.user.schemas import UserInCreatePydantic, UserPydantic
from backend.core.aws import s3_client

router = APIRouter()


def get_user_repository(session=Depends(get_session)) -> UserRepository:
    return UserRepository(session)


def get_photo_repository(session=Depends(get_session)) -> PhotoRepository:
    return PhotoRepository(session)


@router.get("/", response_model=list[PhotoPydantic])
async def get_photos(
    user_to_id: str, photo_rep: PhotoRepository = Depends(get_photo_repository)
):
    return await photo_rep.get_by_user_to(user_to_id)


@router.post("/")
async def upload_photos(
    user_id: str = Form(...),
    user_to_id: str = Form(...),
    text: str | None = Form(None),
    file: str | None = Form(None),
    user_rep: UserRepository = Depends(get_user_repository),
    photo_rep: PhotoRepository = Depends(get_photo_repository),
):
    user_in = UserInCreatePydantic(id=user_id)
    user_to_in = UserInCreatePydantic(id=user_to_id)

    file_name = None
    if file:
        try:
            image_as_bytes = str.encode(file)
            img_recovered = base64.b64decode(image_as_bytes)
            file_name = uuid.uuid4()
            s3_client.put_object(
                Body=img_recovered,
                Bucket="vk-mini-apps",
                Key=f"{file_name}.png",
            )
        except Exception as e:
            print(e)
            return {"message": "There was an error uploading the file"}
    user = await user_rep.get_or_create(user_in)
    user_to = await user_rep.get_or_create(user_to_in)
    photo = await photo_rep.create_with_user(
        PhotoInCreatePydantic(
            uuid_str=f"{file_name}",
            user_id=user.id,
            user_to_id=user_to.id,
            text=text,
        ),
        user,
        user_to,
    )
    return photo
