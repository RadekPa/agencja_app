import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrTemplatesOrderByWithRelationInputObjectSchema as dictAgrTemplatesOrderByWithRelationInputObjectSchema } from './objects/dictAgrTemplatesOrderByWithRelationInput.schema';
import { dictAgrTemplatesWhereInputObjectSchema as dictAgrTemplatesWhereInputObjectSchema } from './objects/dictAgrTemplatesWhereInput.schema';
import { dictAgrTemplatesWhereUniqueInputObjectSchema as dictAgrTemplatesWhereUniqueInputObjectSchema } from './objects/dictAgrTemplatesWhereUniqueInput.schema';
import { DictAgrTemplatesScalarFieldEnumSchema } from './enums/DictAgrTemplatesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictAgrTemplatesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictAgrTemplatesSelect> = z.object({
    Name: z.boolean().optional(),
    FileName: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesSelect>;

export const dictAgrTemplatesFindFirstOrThrowSelectZodSchema = z.object({
    Name: z.boolean().optional(),
    FileName: z.boolean().optional()
  }).strict();

export const dictAgrTemplatesFindFirstOrThrowSchema: z.ZodType<Prisma.dictAgrTemplatesFindFirstOrThrowArgs> = z.object({ select: dictAgrTemplatesFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([dictAgrTemplatesOrderByWithRelationInputObjectSchema, dictAgrTemplatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAgrTemplatesWhereInputObjectSchema.optional(), cursor: dictAgrTemplatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAgrTemplatesScalarFieldEnumSchema, DictAgrTemplatesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesFindFirstOrThrowArgs>;

export const dictAgrTemplatesFindFirstOrThrowZodSchema = z.object({ select: dictAgrTemplatesFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([dictAgrTemplatesOrderByWithRelationInputObjectSchema, dictAgrTemplatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAgrTemplatesWhereInputObjectSchema.optional(), cursor: dictAgrTemplatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictAgrTemplatesScalarFieldEnumSchema, DictAgrTemplatesScalarFieldEnumSchema.array()]).optional() }).strict();