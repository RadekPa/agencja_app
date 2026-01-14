import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema as dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema } from './objects/dictMissRoyExcludeReasonOrderByWithRelationInput.schema';
import { dictMissRoyExcludeReasonWhereInputObjectSchema as dictMissRoyExcludeReasonWhereInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereInput.schema';
import { dictMissRoyExcludeReasonWhereUniqueInputObjectSchema as dictMissRoyExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereUniqueInput.schema';
import { DictMissRoyExcludeReasonScalarFieldEnumSchema } from './enums/DictMissRoyExcludeReasonScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictMissRoyExcludeReasonFindFirstSelectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonSelect> = z.object({
    ExcludeReasonID: z.boolean().optional(),
    ExcludeReasonCode: z.boolean().optional(),
    ExcludeReasonDesc: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonSelect>;

export const dictMissRoyExcludeReasonFindFirstSelectZodSchema = z.object({
    ExcludeReasonID: z.boolean().optional(),
    ExcludeReasonCode: z.boolean().optional(),
    ExcludeReasonDesc: z.boolean().optional()
  }).strict();

export const dictMissRoyExcludeReasonFindFirstSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonFindFirstArgs> = z.object({ select: dictMissRoyExcludeReasonFindFirstSelectSchema.optional(),  orderBy: z.union([dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema, dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional(), cursor: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictMissRoyExcludeReasonScalarFieldEnumSchema, DictMissRoyExcludeReasonScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonFindFirstArgs>;

export const dictMissRoyExcludeReasonFindFirstZodSchema = z.object({ select: dictMissRoyExcludeReasonFindFirstSelectSchema.optional(),  orderBy: z.union([dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema, dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional(), cursor: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictMissRoyExcludeReasonScalarFieldEnumSchema, DictMissRoyExcludeReasonScalarFieldEnumSchema.array()]).optional() }).strict();