import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const pearsonadvandroywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PearsonAdvAndRoyWhereInputObjectSchema), z.lazy(() => PearsonAdvAndRoyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PearsonAdvAndRoyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PearsonAdvAndRoyWhereInputObjectSchema), z.lazy(() => PearsonAdvAndRoyWhereInputObjectSchema).array()]).optional(),
  ContractID: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  ISBN: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(13)]).optional(),
  ContractDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  PublisherName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  TermDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  Title: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  AuthorNames: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  Edition: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  BBD: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  CopyrightYear: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  SeriesName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  FISBN: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  IsPublished: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  SamplesReceivedDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  PubDate: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  RequiredToPublish: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  IsPaid: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  TotalAdvances: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  TotalRoyalties: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Last_Royalty_Period_Reported: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  Date_Royalty_Paid: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const PearsonAdvAndRoyWhereInputObjectSchema: z.ZodType<Prisma.PearsonAdvAndRoyWhereInput> = pearsonadvandroywhereinputSchema as unknown as z.ZodType<Prisma.PearsonAdvAndRoyWhereInput>;
export const PearsonAdvAndRoyWhereInputObjectZodSchema = pearsonadvandroywhereinputSchema;
