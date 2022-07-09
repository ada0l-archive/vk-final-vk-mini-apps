from typing import Type

from sqlalchemy import update

from backend.core.repository import BaseRepository
from backend.user import schemas, models


class UserRepository(
    BaseRepository[
        models.User,
        schemas.UserPydantic,
        schemas.UserInCreatePydantic,
        schemas.UserInUpdatePydantic,
    ]
):
    @property
    def _model(self) -> Type[models.User]:
        return models.User

    async def get_by_id_vk(self, id_vk: str) -> models.User | None:
        q = await self.session.execute(
            self.get_query().filter(self._model.id == id_vk)  # type: ignore
        )
        return q.scalars().first()

    async def get_or_create(
        self, obj_in: schemas.UserInCreatePydantic
    ) -> models.User:
        user = await self.get_by_id_vk(obj_in.id)
        if not user:
            user = await self.create(obj_in)
        return user

    async def update_permissions(
        self, obj: models.User, read_permissions: int, write_permissions: int
    ):
        stmt = (
            update(models.User)
            .where(models.User.id == obj.id)
            .values(
                read_permission=read_permissions,
                write_permission=write_permissions,
            )
        )
        await self.session.execute(stmt)
        await self.session.commit()
