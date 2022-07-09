from sqlalchemy import Column, Integer, String

from backend.core.database import Base


class User(Base):
    id = Column(String, primary_key=True)
    read_permission = Column(Integer, nullable=False, default=0)
    write_permission = Column(Integer, nullable=False, default=0)
