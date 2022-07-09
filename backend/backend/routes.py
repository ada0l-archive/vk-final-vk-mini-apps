from fastapi.routing import APIRouter

from backend.user.api.v1 import router as user_router_v1
from backend.photo.api.v1 import router as photo_router_v1


router_v1 = APIRouter(prefix="/v1")
router_v1.include_router(
    prefix="/user",
    tags=["user"],
    router=user_router_v1,
)
router_v1.include_router(
    prefix="/photo",
    tags=["photos"],
    router=photo_router_v1,
)
