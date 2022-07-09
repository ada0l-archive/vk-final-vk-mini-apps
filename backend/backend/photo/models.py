from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, func
from sqlalchemy.orm import relationship

from backend.core.database import Base
from backend.user.models import User


class Photo(Base):
    id = Column(Integer, primary_key=True)
    text = Column(String, nullable=True)
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    uuid_str = Column(String, nullable=True)
    user_id = Column(String, ForeignKey(User.id, ondelete="CASCADE"))
    user_to_id = Column(String, ForeignKey(User.id, ondelete="CASCADE"))
    user = relationship("User", foreign_keys=[user_id])
    user_to = relationship("User", foreign_keys=[user_to_id])
