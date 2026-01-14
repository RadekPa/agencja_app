import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingTemplatesOrderByWithRelationInputObjectSchema as tblMailingTemplatesOrderByWithRelationInputObjectSchema } from './objects/tblMailingTemplatesOrderByWithRelationInput.schema';
import { tblMailingTemplatesWhereInputObjectSchema as tblMailingTemplatesWhereInputObjectSchema } from './objects/tblMailingTemplatesWhereInput.schema';
import { tblMailingTemplatesWhereUniqueInputObjectSchema as tblMailingTemplatesWhereUniqueInputObjectSchema } from './objects/tblMailingTemplatesWhereUniqueInput.schema';
import { TblMailingTemplatesScalarFieldEnumSchema } from './enums/TblMailingTemplatesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblMailingTemplatesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblMailingTemplatesSelect> = z.object({
    TempID: z.boolean().optional(),
    TempName: z.boolean().optional(),
    TempPath: z.boolean().optional(),
    TempSubject: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesSelect>;

export const tblMailingTemplatesFindFirstOrThrowSelectZodSchema = z.object({
    TempID: z.boolean().optional(),
    TempName: z.boolean().optional(),
    TempPath: z.boolean().optional(),
    TempSubject: z.boolean().optional()
  }).strict();

export const tblMailingTemplatesFindFirstOrThrowSchema: z.ZodType<Prisma.tblMailingTemplatesFindFirstOrThrowArgs> = z.object({ select: tblMailingTemplatesFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([tblMailingTemplatesOrderByWithRelationInputObjectSchema, tblMailingTemplatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMailingTemplatesWhereInputObjectSchema.optional(), cursor: tblMailingTemplatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblMailingTemplatesScalarFieldEnumSchema, TblMailingTemplatesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesFindFirstOrThrowArgs>;

export const tblMailingTemplatesFindFirstOrThrowZodSchema = z.object({ select: tblMailingTemplatesFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([tblMailingTemplatesOrderByWithRelationInputObjectSchema, tblMailingTemplatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMailingTemplatesWhereInputObjectSchema.optional(), cursor: tblMailingTemplatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblMailingTemplatesScalarFieldEnumSchema, TblMailingTemplatesScalarFieldEnumSchema.array()]).optional() }).strict();