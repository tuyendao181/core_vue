/****** Object:  Table [dbo].[S999]    Script Date: 2024/02/19 0:05:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[S999](
	[user_cd] [nvarchar](5) NULL,
	[prs_date] [datetime2](7) NULL,
	[prg_id] [nvarchar](50) NULL,
	[prg_nm] [nvarchar](50) NULL,
	[prs_mode] [nvarchar](10) NULL,
	[prs_key] [nvarchar](max) NULL,
	[result] [nvarchar](20) NULL,
	[remarks] [nvarchar](200) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
