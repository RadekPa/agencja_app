import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuthorsIncludeObjectSchema as tblTitAuthorsIncludeObjectSchema } from './objects/tblTitAuthorsInclude.schema';
import { tblTitAuthorsOrderByWithRelationInputObjectSchema as tblTitAuthorsOrderByWithRelationInputObjectSchema } from './objects/tblTitAuthorsOrderByWithRelationInput.schema';
import { tblTitAuthorsWhereInputObjectSchema as tblTitAuthorsWhereInputObjectSchema } from './objects/tblTitAuthorsWhereInput.schema';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './objects/tblTitAuthorsWhereUniqueInput.schema';
import { TblTitAuthorsScalarFieldEnumSchema } from './enums/TblTitAuthorsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblTitAuthorsFindFirstSelectSchema: z.ZodType<Prisma.tblTitAuthorsSelect> = z.object({
    AuthorID: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    Main: z.boolean().optional(),
    Lp: z.boolean().optional(),
    tblAuthors: z.boolean().optional(),
    tblTitles: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsSelect>;

export const tblTitAuthorsFindFirstSelectZodSchema = z.object({
    AuthorID: z.boolean().optional(),
    TitleID: z.boolean().optional(),
    Main: z.boolean().optional(),
    Lp: z.boolean().optional(),
    tblAuthors: z.boolean().optional(),
    tblTitles: z.boolean().optional()
  }).strict();

export const tblTitAuthorsFindFirstSchema: z.ZodType<Prisma.tblTitAuthorsFindFirstArgs> = z.object({ select: tblTitAuthorsFindFirstSelectSchema.optional(), include: z.lazy(() => tblTitAuthorsIncludeObjectSchema.optional()), orderBy: z.union([tblTitAuthorsOrderByWithRelationInputObjectSchema, tblTitAuthorsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitAuthorsWhereInputObjectSchema.optional(), cursor: tblTitAuthorsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitAuthorsScalarFieldEnumSchema, TblTitAuthorsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsFindFirstArgs>;

export const tblTitAuthorsFindFirstZodSchema = z.object({ select: tblTitAuthorsFindFirstSelectSchema.optional(), include: z.lazy(() => tblTitAuthorsIncludeObjectSchema.optional()), orderBy: z.union([tblTitAuthorsOrderByWithRelationInputObjectSchema, tblTitAuthorsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitAuthorsWhereInputObjectSchema.optional(), cursor: tblTitAuthorsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitAuthorsScalarFieldEnumSchema, TblTitAuthorsScalarFieldEnumSchema.array()]).optional() }).strict();