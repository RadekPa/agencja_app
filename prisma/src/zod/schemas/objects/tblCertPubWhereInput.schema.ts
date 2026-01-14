import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'

const tblcertpubwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCertPubWhereInputObjectSchema), z.lazy(() => tblCertPubWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCertPubWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCertPubWhereInputObjectSchema), z.lazy(() => tblCertPubWhereInputObjectSchema).array()]).optional(),
  ClientID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Year: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  PubID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DateSent: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Original: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const tblCertPubWhereInputObjectSchema: z.ZodType<Prisma.tblCertPubWhereInput> = tblcertpubwhereinputSchema as unknown as z.ZodType<Prisma.tblCertPubWhereInput>;
export const tblCertPubWhereInputObjectZodSchema = tblcertpubwhereinputSchema;
