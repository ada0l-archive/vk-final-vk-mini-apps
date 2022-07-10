from sqlalchemy import Column, Integer, String

from sqlalchemy.dialects.postgresql import ARRAY

from backend.core.database import Base


class User(Base):
    id = Column(String, primary_key=True)
    read_permission = Column(
        ARRAY(Integer), nullable=False, server_default="{}"
    )
    write_permission = Column(
        ARRAY(Integer), nullable=False, server_default="{}"
    )
