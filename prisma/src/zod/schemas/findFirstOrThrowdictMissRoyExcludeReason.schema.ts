import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema as dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema } from './objects/dictMissRoyExcludeReasonOrderByWithRelationInput.schema';
import { dictMissRoyExcludeReasonWhereInputObjectSchema as dictMissRoyExcludeReasonWhereInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereInput.schema';
import { dictMissRoyExcludeReasonWhereUniqueInputObjectSchema as dictMissRoyExcludeReasonWhereUniqueInputObjectSchema } from './objects/dictMissRoyExcludeReasonWhereUniqueInput.schema';
import { DictMissRoyExcludeReasonScalarFieldEnumSchema } from './enums/DictMissRoyExcludeReasonScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictMissRoyExcludeReasonFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonSelect> = z.object({
    ExcludeReasonID: z.boolean().optional(),
    ExcludeReasonCode: z.boolean().optional(),
    ExcludeReasonDesc: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonSelect>;

export const dictMissRoyExcludeReasonFindFirstOrThrowSelectZodSchema = z.object({
    ExcludeReasonID: z.boolean().optional(),
    ExcludeReasonCode: z.boolean().optional(),
    ExcludeReasonDesc: z.boolean().optional()
  }).strict();

export const dictMissRoyExcludeReasonFindFirstOrThrowSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonFindFirstOrThrowArgs> = z.object({ select: dictMissRoyExcludeReasonFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema, dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional(), cursor: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictMissRoyExcludeReasonScalarFieldEnumSchema, DictMissRoyExcludeReasonScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonFindFirstOrThrowArgs>;

export const dictMissRoyExcludeReasonFindFirstOrThrowZodSchema = z.object({ select: dictMissRoyExcludeReasonFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema, dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMissRoyExcludeReasonWhereInputObjectSchema.optional(), cursor: dictMissRoyExcludeReasonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictMissRoyExcludeReasonScalarFieldEnumSchema, DictMissRoyExcludeReasonScalarFieldEnumSchema.array()]).optional() }).strict();