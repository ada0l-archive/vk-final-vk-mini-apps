from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select

from backend.core.database import get_session
from backend.core.schemas import Message
from backend.user.models import User
from backend.user.repository import UserRepository
from backend.user.schemas import UserInUpdatePermissions, UserPydantic

router = APIRouter()


def get_user_repository(session=Depends(get_session)) -> UserRepository:
    return UserRepository(session)


@router.get("/", response_model=list[UserPydantic])
async def get_users(session=Depends(get_session)):
    q = await session.execute(select(User))
    return q.scalars().all()


@router.get("/{user_id}", response_model=UserPydantic)
async def get_user(
    user_id: str,
    user_rep=Depends(get_user_repository),
):
    obj = await user_rep.get_by_id_vk(user_id)
    if not obj:
        raise HTTPException(
            detail="User is not exist", status_code=status.HTTP_409_CONFLICT
        )
    return obj


@router.put("/{user_id}", response_model=Message)
async def update_permissions(
    user_id: str,
    obj_in: UserInUpdatePermissions,
    user_rep=Depends(get_user_repository),
):
    obj = await user_rep.get_by_id_vk(user_id)
    if not obj:
        raise HTTPException(
            detail="User is not exist", status_code=status.HTTP_409_CONFLICT
        )
    await user_rep.update_permissions(
        obj, obj_in.read_permission, obj_in.write_permission
    )
    return Message(detail="OK")
