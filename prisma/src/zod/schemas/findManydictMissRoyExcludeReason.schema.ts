import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema as dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema } from './objects/dictMissRoyExcludeReasonOrderByWithRelationInput.schema';
import { dictMissRoyExcludeReasonWhereInputObjectSchema as dictMissRoyExcludeReasonWhereInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereInput.schema';
import { dictMissRoyExcludeReasonWhereUniqueInputObjectSchema as dictMissRoyExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereUniqueInput.schema';
import { DictMissRoyExcludeReasonScalarFieldEnumSchema } from './enums/DictMissRoyExcludeReasonScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictMissRoyExcludeReasonFindManySelectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonSelect> = z.object({
    ExcludeReasonID: z.boolean().optional(),
    ExcludeReasonCode: z.boolean().optional(),
    ExcludeReasonDesc: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonSelect>;

export const dictMissRoyExcludeReasonFindManySelectZodSchema = z.object({
    ExcludeReasonID: z.boolean().optional(),
    ExcludeReasonCode: z.boolean().optional(),
    ExcludeReasonDesc: z.boolean().optional()
  }).strict();

export const dictMissRoyExcludeReasonFindManySchema: z.ZodType<Prisma.dictMissRoyExcludeReasonFindManyArgs> = z.object({ select: dictMissRoyExcludeReasonFindManySelectSchema.optional(),  orderBy: z.union([dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema, dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional(), cursor: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictMissRoyExcludeReasonScalarFieldEnumSchema, DictMissRoyExcludeReasonScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonFindManyArgs>;

export const dictMissRoyExcludeReasonFindManyZodSchema = z.object({ select: dictMissRoyExcludeReasonFindManySelectSchema.optional(),  orderBy: z.union([dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema, dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional(), cursor: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictMissRoyExcludeReasonScalarFieldEnumSchema, DictMissRoyExcludeReasonScalarFieldEnumSchema.array()]).optional() }).strict();