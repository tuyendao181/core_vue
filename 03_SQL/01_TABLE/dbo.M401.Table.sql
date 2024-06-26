/****** Object:  Table [dbo].[M401]    Script Date: 2024/02/19 0:05:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[M401](
	[name_div] [nvarchar](50) NOT NULL,
	[name_cd] [smallint] NOT NULL,
	[name] [nvarchar](60) NULL,
	[kn_name] [nvarchar](60) NULL,
	[ab_name] [nvarchar](30) NULL,
	[char_remakrs_ex1] [nvarchar](50) NULL,
	[char_remakrs1] [nvarchar](50) NULL,
	[char_remakrs_ex2] [nvarchar](50) NULL,
	[char_remakrs2] [nvarchar](50) NULL,
	[num_remakrs_ex1] [nvarchar](50) NULL,
	[num_remakrs1] [numeric](18, 0) NULL,
	[num_remakrs_ex2] [nvarchar](50) NULL,
	[num_remakrs2] [numeric](18, 0) NULL,
	[default_flg] [smallint] NULL,
	[sort] [int] NULL,
	[cre_user_cd] [nvarchar](5) NULL,
	[cre_prg] [nvarchar](30) NULL,
	[cre_ip] [nvarchar](20) NULL,
	[cre_tm] [datetime2](7) NULL,
	[upd_user_cd] [nvarchar](5) NULL,
	[upd_prg] [nvarchar](30) NULL,
	[upd_ip] [nvarchar](20) NULL,
	[upd_tm] [datetime2](7) NULL,
	[del_user_cd] [nvarchar](5) NULL,
	[del_prg] [nvarchar](30) NULL,
	[del_ip] [nvarchar](20) NULL,
	[del_tm] [datetime2](7) NULL,
	[del_flg] [int] NULL,
 CONSTRAINT [PK_m_library] PRIMARY KEY CLUSTERED 
(
	[name_div] ASC,
	[name_cd] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
