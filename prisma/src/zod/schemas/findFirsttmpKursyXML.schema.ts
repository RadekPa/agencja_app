import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLOrderByWithRelationInputObjectSchema as tmpKursyXMLOrderByWithRelationInputObjectSchema } from './objects/tmpKursyXMLOrderByWithRelationInput.schema';
import { tmpKursyXMLWhereInputObjectSchema as tmpKursyXMLWhereInputObjectSchema } from './objects/tmpKursyXMLWhereInput.schema';
import { tmpKursyXMLWhereUniqueInputObjectSchema as tmpKursyXMLWhereUniqueInputObjectSchema } from './objects/tmpKursyXMLWhereUniqueInput.schema';
import { TmpKursyXMLScalarFieldEnumSchema } from './enums/TmpKursyXMLScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tmpKursyXMLFindFirstSelectSchema: z.ZodType<Prisma.tmpKursyXMLSelect> = z.object({
    Id: z.boolean().optional(),
    XMLData: z.boolean().optional(),
    LoadedDateTime: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLSelect>;

export const tmpKursyXMLFindFirstSelectZodSchema = z.object({
    Id: z.boolean().optional(),
    XMLData: z.boolean().optional(),
    LoadedDateTime: z.boolean().optional()
  }).strict();

export const tmpKursyXMLFindFirstSchema: z.ZodType<Prisma.tmpKursyXMLFindFirstArgs> = z.object({ select: tmpKursyXMLFindFirstSelectSchema.optional(),  orderBy: z.union([tmpKursyXMLOrderByWithRelationInputObjectSchema, tmpKursyXMLOrderByWithRelationInputObjectSchema.array()]).optional(), where: tmpKursyXMLWhereInputObjectSchema.optional(), cursor: tmpKursyXMLWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TmpKursyXMLScalarFieldEnumSchema, TmpKursyXMLScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLFindFirstArgs>;

export const tmpKursyXMLFindFirstZodSchema = z.object({ select: tmpKursyXMLFindFirstSelectSchema.optional(),  orderBy: z.union([tmpKursyXMLOrderByWithRelationInputObjectSchema, tmpKursyXMLOrderByWithRelationInputObjectSchema.array()]).optional(), where: tmpKursyXMLWhereInputObjectSchema.optional(), cursor: tmpKursyXMLWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TmpKursyXMLScalarFieldEnumSchema, TmpKursyXMLScalarFieldEnumSchema.array()]).optional() }).strict();