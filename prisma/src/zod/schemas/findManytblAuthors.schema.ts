import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsIncludeObjectSchema as tblAuthorsIncludeObjectSchema } from './objects/tblAuthorsInclude.schema';
import { tblAuthorsOrderByWithRelationInputObjectSchema as tblAuthorsOrderByWithRelationInputObjectSchema } from './objects/tblAuthorsOrderByWithRelationInput.schema';
import { tblAuthorsWhereInputObjectSchema as tblAuthorsWhereInputObjectSchema } from './objects/tblAuthorsWhereInput.schema';
import { tblAuthorsWhereUniqueInputObjectSchema as tblAuthorsWhereUniqueInputObjectSchema } from './objects/tblAuthorsWhereUniqueInput.schema';
import { TblAuthorsScalarFieldEnumSchema } from './enums/TblAuthorsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblAuthorsFindManySelectSchema: z.ZodType<Prisma.tblAuthorsSelect> = z.object({
    AuthorID: z.boolean().optional(),
    FullName: z.boolean().optional(),
    FirstName: z.boolean().optional(),
    MiddleName: z.boolean().optional(),
    LastName: z.boolean().optional(),
    Suffix: z.boolean().optional(),
    PenName: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    tblTitAuthors: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblAuthorsSelect>;

export const tblAuthorsFindManySelectZodSchema = z.object({
    AuthorID: z.boolean().optional(),
    FullName: z.boolean().optional(),
    FirstName: z.boolean().optional(),
    MiddleName: z.boolean().optional(),
    LastName: z.boolean().optional(),
    Suffix: z.boolean().optional(),
    PenName: z.boolean().optional(),
    UserMod: z.boolean().optional(),
    DateMod: z.boolean().optional(),
    Remarks: z.boolean().optional(),
    tblTitAuthors: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblAuthorsFindManySchema: z.ZodType<Prisma.tblAuthorsFindManyArgs> = z.object({ select: tblAuthorsFindManySelectSchema.optional(), include: z.lazy(() => tblAuthorsIncludeObjectSchema.optional()), orderBy: z.union([tblAuthorsOrderByWithRelationInputObjectSchema, tblAuthorsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAuthorsWhereInputObjectSchema.optional(), cursor: tblAuthorsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAuthorsScalarFieldEnumSchema, TblAuthorsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAuthorsFindManyArgs>;

export const tblAuthorsFindManyZodSchema = z.object({ select: tblAuthorsFindManySelectSchema.optional(), include: z.lazy(() => tblAuthorsIncludeObjectSchema.optional()), orderBy: z.union([tblAuthorsOrderByWithRelationInputObjectSchema, tblAuthorsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAuthorsWhereInputObjectSchema.optional(), cursor: tblAuthorsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAuthorsScalarFieldEnumSchema, TblAuthorsScalarFieldEnumSchema.array()]).optional() }).strict();