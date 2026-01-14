import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesIncludeObjectSchema as dictLanguagesIncludeObjectSchema } from './objects/dictLanguagesInclude.schema';
import { dictLanguagesOrderByWithRelationInputObjectSchema as dictLanguagesOrderByWithRelationInputObjectSchema } from './objects/dictLanguagesOrderByWithRelationInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './objects/dictLanguagesWhereInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './objects/dictLanguagesWhereUniqueInput.schema';
import { DictLanguagesScalarFieldEnumSchema } from './enums/DictLanguagesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictLanguagesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictLanguagesSelect> = z.object({
    LangAbb: z.boolean().optional(),
    LangDesc: z.boolean().optional(),
    LangPL: z.boolean().optional(),
    dictArticles: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictLanguagesSelect>;

export const dictLanguagesFindFirstOrThrowSelectZodSchema = z.object({
    LangAbb: z.boolean().optional(),
    LangDesc: z.boolean().optional(),
    LangPL: z.boolean().optional(),
    dictArticles: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictLanguagesFindFirstOrThrowSchema: z.ZodType<Prisma.dictLanguagesFindFirstOrThrowArgs> = z.object({ select: dictLanguagesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictLanguagesIncludeObjectSchema.optional()), orderBy: z.union([dictLanguagesOrderByWithRelationInputObjectSchema, dictLanguagesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictLanguagesWhereInputObjectSchema.optional(), cursor: dictLanguagesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictLanguagesScalarFieldEnumSchema, DictLanguagesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictLanguagesFindFirstOrThrowArgs>;

export const dictLanguagesFindFirstOrThrowZodSchema = z.object({ select: dictLanguagesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictLanguagesIncludeObjectSchema.optional()), orderBy: z.union([dictLanguagesOrderByWithRelationInputObjectSchema, dictLanguagesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictLanguagesWhereInputObjectSchema.optional(), cursor: dictLanguagesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictLanguagesScalarFieldEnumSchema, DictLanguagesScalarFieldEnumSchema.array()]).optional() }).strict();