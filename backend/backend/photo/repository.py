from typing import Type

from backend.core.repository import BaseRepository
from backend.photo import schemas, models
from backend.user.schemas import UserPydantic


class PhotoRepository(
    BaseRepository[
        models.Photo,
        schemas.PhotoPydantic,
        schemas.PhotoInCreatePydantic,
        schemas.PhotoInUpdatePydantic,
    ]
):
    @property
    def _model(self) -> Type[models.Photo]:
        return models.Photo

    async def create_with_user(
        self,
        obj_in: schemas.PhotoInCreatePydantic,
        user: UserPydantic,
        user_to: UserPydantic,
        commit: bool = True,
    ):
        obj = obj_in.dict()
        obj["user_id"] = user.id
        obj["user_to_id"] = user_to.id
        db_obj = self._model(**obj)
        self.session.add(db_obj)
        if commit:
            await self.session.commit()
            await self.session.refresh(db_obj)
        return db_obj

    async def get_by_user_to(self, user_to_id: str) -> list[models.Photo]:
        q = await self.session.execute(
            self.get_query()
            .filter(self._model.user_to_id == user_to_id)
            .order_by(self._model.time_created.desc())
        )
        return q.scalars().all()
