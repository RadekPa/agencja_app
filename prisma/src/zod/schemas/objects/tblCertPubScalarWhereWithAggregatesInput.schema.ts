import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'

const tblcertpubscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCertPubScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCertPubScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCertPubScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCertPubScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCertPubScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ClientID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Year: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  PubID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  DateSent: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Original: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const tblCertPubScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblCertPubScalarWhereWithAggregatesInput> = tblcertpubscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblCertPubScalarWhereWithAggregatesInput>;
export const tblCertPubScalarWhereWithAggregatesInputObjectZodSchema = tblcertpubscalarwherewithaggregatesinputSchema;
