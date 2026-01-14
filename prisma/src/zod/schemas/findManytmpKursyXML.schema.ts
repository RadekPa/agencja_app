import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLOrderByWithRelationInputObjectSchema as tmpKursyXMLOrderByWithRelationInputObjectSchema } from './objects/tmpKursyXMLOrderByWithRelationInput.schema';
import { tmpKursyXMLWhereInputObjectSchema as tmpKursyXMLWhereInputObjectSchema } from './objects/tmpKursyXMLWhereInput.schema';
import { tmpKursyXMLWhereUniqueInputObjectSchema as tmpKursyXMLWhereUniqueInputObjectSchema } from './objects/tmpKursyXMLWhereUniqueInput.schema';
import { TmpKursyXMLScalarFieldEnumSchema } from './enums/TmpKursyXMLScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tmpKursyXMLFindManySelectSchema: z.ZodType<Prisma.tmpKursyXMLSelect> = z.object({
    Id: z.boolean().optional(),
    XMLData: z.boolean().optional(),
    LoadedDateTime: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLSelect>;

export const tmpKursyXMLFindManySelectZodSchema = z.object({
    Id: z.boolean().optional(),
    XMLData: z.boolean().optional(),
    LoadedDateTime: z.boolean().optional()
  }).strict();

export const tmpKursyXMLFindManySchema: z.ZodType<Prisma.tmpKursyXMLFindManyArgs> = z.object({ select: tmpKursyXMLFindManySelectSchema.optional(),  orderBy: z.union([tmpKursyXMLOrderByWithRelationInputObjectSchema, tmpKursyXMLOrderByWithRelationInputObjectSchema.array()]).optional(), where: tmpKursyXMLWhereInputObjectSchema.optional(), cursor: tmpKursyXMLWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TmpKursyXMLScalarFieldEnumSchema, TmpKursyXMLScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLFindManyArgs>;

export const tmpKursyXMLFindManyZodSchema = z.object({ select: tmpKursyXMLFindManySelectSchema.optional(),  orderBy: z.union([tmpKursyXMLOrderByWithRelationInputObjectSchema, tmpKursyXMLOrderByWithRelationInputObjectSchema.array()]).optional(), where: tmpKursyXMLWhereInputObjectSchema.optional(), cursor: tmpKursyXMLWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TmpKursyXMLScalarFieldEnumSchema, TmpKursyXMLScalarFieldEnumSchema.array()]).optional() }).strict();